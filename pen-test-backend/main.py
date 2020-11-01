from flask import Flask
from bs4 import BeautifulSoup
import requests
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app)

def test_main(url):
    count = 0
    print("Scraping url:" + url)
    website = requests.get(url)
    soup = BeautifulSoup(website.content, "html.parser")
    scripts = soup.select('script')

    for script in scripts:
        try:
            try:
                new_link = script["src"]
            except:
                new_link = script["data-src"]
            if new_link.startswith('http'):
                #print("Scraping nested url:" + new_link)
                count = count + test_nested(new_link, 1)
        except:
            data = script
            count = count + pen_test(data)
    return count

def test_nested(url, level):
    count = 0
    if level < 3 :
        print("Scraping nested url:" + url)
        website = requests.get(url)
        soup = BeautifulSoup(website.content, "html.parser")
        scripts = soup.find('script')
        try:
            for script in scripts:
                try:
                    try:
                        new_link = script["src"]
                    except:
                        new_link = script["data-src"]
                    if new_link.startswith('http'):
                        print("Skipping url:" + new_link)
                        test_nested(new_link, level+1)
                except:
                    data = script
                    count = count + pen_test(data)
        except:
            #print(soup)
            count = count + pen_test(soup)
    return count

def pen_test(content):
    #print("Testing", content)
    print("Testing")
    keywords = ['console.log','key=','TODO','FIXME',
                'gets()', 'scanf()', 'sprintf()', 'strcat()', 'strcpy()'
                'printf()', 'fprintf()', 'vprintf()', 'snprintf()', 'vsnprintf()', 'syslog()'
                'access()', 'chown()', 'chgrp()', 'chmod()', 'mktemp()', 'tempnam()', 'tmpfile()', 'tmpnam()'
                'rand()', 'random()',
                'exec()', 'popen()', 'system()']
    patterns = ['AIza[0-9A-Za-z-_]{35}','sk_live_[0-9a-z]{32}','sk_live_(0-9a-zA-Z]{24}','sk_live_(0-9a-zA-Z]{24}',
                'AKIA[0-9A-Z]{16}','[0-9a-zA-Z/+]{40}',
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}','[A-Za-z0-9_]{21}--[A-Za-z0-9_]{8}',
                '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}','[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}']

    flag = 0
    for keyword in keywords:
        if (str(content).find(keyword) != -1):
            flag = flag+1

    for pattern in patterns:
        print(pattern)
        # if re.search(re.compile(pattern), content):
        #     flag = flag+1
        #     print('API key found')

    if flag == 0:
        print('You good')
    else:
        print('security vulnerabilty found')
    return flag

@app.route('/<url>')
def getFlags(url):
    # return "http://" + url
    flags = test_main("http://" + url)
    return str(flags)

if __name__ == '__main__':
   app.run()