Hey!! My name is Shubhi...
Github profile link: https://github.com/Shubhi2002

Ques - 1 Which kind of development(s) do you do? (web/app/cc/etc).
Web and cc

Ques - What do you really understand from SSH keys? What are the advantages of using it?

SSH keys helps us to avoid writing username and password every single time when you push any change to github and authenticate it.
SSH keys are generated in pairs, a public key and a private key.
Public keys are the one that gets shared and a private key is the one that is stored only on your computer. If the keys match, you're granted access.
Basicaaly it is not only convenient but is also more secure.

Ques - How to edit the last commit message in git?

First of all you can check your current commit message by "git log"
Than to edit the messege use "git commit --amend"
This will open your vim where you can change your commit messege by pressing i(for inserting) and when done just press "Esc" and type ":wq" and press "Enter" to return back
Now you can again use the command "git log" to see the changes in commit messege.
Ques - 2 Resources that you follow to learn the above tech-stacks (development)? Online resources
Ques - Explain the whole process that you will be using to delete that commit.

To move the Head to other commit id-

git log
git reset HEAD~1 (To remove the last commit)

Now to remove changes in the file-
 
git diff
git checkout "name of the file in which commit was made"

Now the branch will be clean and you can push the changes.
