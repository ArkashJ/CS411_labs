# Lab Agenda

1) TA Introduction and course overview
2) Git basics - do the assignment https://learngitbranching.js.org/
3) Do as follows
    a) Make a github repo called firstname_lastname_lab1_cs411
    b) Make it private, you dont need a license or gitignore
    c) Once made
        - go to your terminal
        - cd Desktop 
        - mkdir test_folder && cd test_folder && mkdir lab1
        - cd lab1
        - git init
        - echo "# Lab 1" >> README.md
        - git add README.md
        - git commit -m "first commit"
        - git remote add origin
        - git push -u origin master

4) In the lab1 folder - make a python file with the following dictionary
```
dict = {}

dict['HTML_CSS_resource_link'] = 'https://www.freecodecamp.org/learn/2022/responsive-web-design/'
dict['REACT_resource_link'] = 'https://www.youtube.com/watch?v=bMknfKXIFA8'
dict['javascript'] = 'https://www.freecodecamp.org/news/learn-javascript-for-beginners/'
dict['git_resources'] = [('ssh', 'https://drive.google.com/file/d/154GY3Jf-zMn3jTDGTZvmVMLiXPGyMib_/view'), ('git workflow', 'https://drive.google.com/file/d/1xTQlT9wJFBqaXyez5Lsxmj6qMfkeGbvY/view'), ('remote repo management', 'https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories')]
dict['node_js_resources'] = ['https://nodejs.dev/en/learn/', 'https://www.w3schools.com/nodejs/']

# print hello cs 411
```

