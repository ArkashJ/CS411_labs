# Setting up SSH Keys
```https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent```
## Steps
1) Open Your Terminal
2) Generate a new SSH key
```bash
ssh-keygen -t rsa -b 4096 -C "youremail_for_github.com"
```
Eg:
```bash
ssh-keygen -t rsa -b 4096 -C "arkashjain17@gmail.com"
```
3) When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.
4) Keep Entering!
5) Start the ssh-agent in the background
```bash
eval "$(ssh-agent -s)"
```
Output:
```> Agent pid 59566```

6) Add your SSH private key to the ssh-agent
```bash
ssh-add ~/.ssh/id_rsa
```
7) If it exists modify else make a new file
```bash
touch ~/.ssh/config
```
8) Open the file and paste the following
```bash
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```
9) Add the SSH key to your GitHub account
```bash
pbcopy < ~/.ssh/id_rsa.pub
```

```
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
```
ADD SSH KEY TO GITHUB ACCOUNT
1) In the upper-right corner of any page, click your profile photo, then click Settings.
2) In the user settings sidebar, click SSH and GPG keys.
3) Click New SSH key or Add SSH key.
4) In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".
5) Paste your key into the "Key" field.
6) Click Add SSH key.


# Git Commands

## Initialize a new repository

```bash
git init
```

## Add files to the staging area

```bash
git add <file>
```

## Commit changes

```bash
git commit -m "Commit message"
```

## Push changes to a remote repository

```bash
git push
```

## Pull changes from a remote repository

```bash
git pull
```

## Clone a repository

```bash
git clone <url>
```

## Create a new branch

```bash
git switch -c branch <branch-name>
```

## Switch to a branch

```bash
git switch <branch-name>
```

## Merge a branch

```bash
git merge <branch-name>
```

## Delete a branch

```bash
git branch -d <branch-name>
```

## View the commit history

```bash
git log
```

## View the status of the repository

```bash
git status
```

## View the changes made to a file

```bash
git diff <file>
```

### Exercise

1. Clone the Spring 2024 repository
2. Star the repository
3. Pull the latest changes weekly

### TODO
- https://learngitbranching.js.org/?locale=en_US
- Fun test: to change the language of the url, replace en with ko


