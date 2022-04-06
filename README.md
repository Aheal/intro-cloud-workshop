# intro-cloud-workshop

Deploy a Nodejs and Express endpoint on a aws ec2 instance

## Commands for aws ec2 instance

 1. Perform a quick update on your instance

>     sudo yum update -y

 2. install git in your EC2 instance

>     sudo yum install git -y

3. Check git version

>     git version

4. Install nvm
>
>     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
>     . ~/.nvm/nvm.sh
>     nvm install node
>     node -v

5. Clone the repository
  git clone [https://github.com/Aheal/intro-cloud-workshop.git](https://github.com/Aheal/intro-cloud-workshop.git)

 6. Install project

>     cd intro-cloud-workshop
>     npm i

7. Run node server

> `node index.js`