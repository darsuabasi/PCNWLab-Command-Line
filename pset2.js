/******************
PROBLEM 1:

In this problem, you will be downloading some files from online, then creating a custom project with git initialized. You will then one by one structure the files and make commits to git as needed.

1. Download this repository from the homepage by clicking "Clone or download", then "Download ZIP". You will be using the files from the /stuff directory.
2. Once the repository has been downloaded, go ahead and unzip it.

3. Achieve the following structure ONLY using command line:

~/Desktop/pset2
    /assets
        /images
            amazon.jpg
            facebook.png
            google.jpg
            twitter.png
        /memes
            meme.jpg
        /src
            foo.js
    app.js
    hello.html


    cd dylanabasiurua
    cd desktop
    mkdir assets 
    cd assets 
    mkdir images
    mkdir memes
    mkdir src
    cd .. till you get back to dylanabasiurua
    cd Downloads
    cd PCNWLab-Command-Line-master
    cd stuff
    git add amazon.jpg
    git add facebook.png
    git add google.jpg
    git add meme.jpg
    git add twitter.png
    git add foo.js 
    git add app.js
    git add hello.html
    git add amazon.jpg
    mv amazon.jpg images 
    mv facebook.png images
    mv google.jpg images
    mv twitter.png images 
    mv meme.jpg memes
    mv foo.js src
    mv app.js pset2.js
    mv hello.html pset2.js
    
    


    mv amazon.jpg assets
    mv facebook.png assets
    mv google.jpg assets
    mv twitter.png assets


    cd Downloads
    cd PCNWLab-Command-Line-master
    git init
    mkdir assets
    git add pset2.js
    
    

4. Open `hello.html` using a code editor and change "SOME_CLASS" to "Full Stack: Nights & Weekends". Save it.

5. You should have the following commits:
- git initialized
- added app.js
- added hello.html
- created assets directory
- added all images & memes
- added all sources
- modified hello file
******************/