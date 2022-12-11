# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

This project was definetly a big step for us, but incredibly rewarding to accomplish. With so many possible places for mistakes and typos to occur, it kind of feels like a wonder I even got this done. To find success and avoid these pitfalls, I kept my mind on one primary concept through out the project: think small. 

Over the last week, I have really focused on the baby-step approach of coding everything that I write. Any time I created a variable, got a response from the server, or posted a response, I console logged everything to know what data was being transfered. 

My first major issue came up in the process of POSTing my collected data from inputs to the server. I knew I was going to need an object, but I struggled with getting that object unpackaged into something workable on the other side. Figuring out where I was supposed to run the function to solve the equation was a bit of a struggle, and I spent a lot of time thinking it was something that could be done in the GET request. After many failed attempts, I pulled myself back and channeled the small thoughts. I realized that I might not have errors in my if conditionals to solve the equation, and it might have something to do with where I was running the function. Moving it to the POST section ended up allowing me to not only create the equation sooner, but it also explained the mysterious hint that mat had given us early: have space in the object for the answer to your variable.

Having learned so much in the last two weeks, I also wanted to try my hand at a bit of experimentation on the client side of the project. For selecting the modifier, I had four operations in the onReady function just to handle the click of each operator button. After a bit of reading through some MDN and W3schools articles, I discovered on click events in the HTML could run button presses just like jQuery .on('click'). It looked slick, but also fit the singular use of the buttons. 

I also tried to put some serious effort into the stretch goals, which look really ugly, but I was able to get two of the three functions working this time. Once again, w3Schools really came in handy in helping me find ways to solve the problem of rerunning the history (which I only had half a solution for from last weeks courses on jQuery), teaching me the new split method. It took a couple tries to figure out, I definitely split every letter in the string into a value in an array, but it gave me the values I needed to repopulate the input fields and the alert pop-up with object literals of each element of the index. Ugly, but functional. 

This week took a lot of work, but I realy started to feel like all the aspects of jQuery and node come together. I would like to use module and export to decrease clutter next time I work on a jQuery project, but I ran out of time to try that out on this project. 

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
