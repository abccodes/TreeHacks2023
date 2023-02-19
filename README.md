# TreeHacks2023
##Inspiration
 Creating Leviathan we were inspired by **You.com's** ability to create powerful tools with very minimal code and **OpenAIs** powerful chat-based APIs. We mainly got our idea by **attending some of the events here at Treehacks.** The OpenAI event where Andrej Karpathy was explaining how ChatGPT could actually be used as a backend was one of our main inspirations for our idea. We also went to a You.com event and found the technology to be very innovative and practical. Keeping what we learned from these two seminars in mind, we decided to combine our new knowledge and build something using both.

## What it does
**Leviathan** is a website developing tool that works by processing natural language inputs from users to generate personalized websites. Its super easy to use all a user has to do is input text for whatever type of website they want to generate and the website is generated. For example if a person wants to make a blog website all they have to do is type in, make me a blog website. Then a simple version of a blog website will be generated which can be immediately used but also can act as a skeleton for a developer wanting to make more complex website.

##How We Built It** 
We built it using You.com, Trudo, ChatGPT, OpenAI, Convex, Typescript, and React. We used ChatGPT to create a bunch of sample websites which were used as datasets to train our AI model. We then used Trudo to train and compile the model. We took advantage of Convex and created functions in typescript to query OpenAI and help generate responses for website generation requests. We then put it all together using You.com and used its built in front end UI. Finally, we made a simple landing page using React that directs a user to our You.com website generation site.

## Challenges we ran into
We ran into major issues and bugs every step of the way. When making our datasets using ChatGPT, our spreadsheet software messed up all our data so we had to manually go in and make sure all our data would be correct and usable. We had issues with Trulo training our datasets but after tweaking with the settings we eventually got it to work. We also had issues with Trulo's payment plan being very expensive and had to contact support to give us access to use it for free for the Hackathon. We had issues with Convex functions requesting data from OpenAI because they would continuously timeout and not throw any errors. We had to contact the team and increase the timeout time so the functions were able to go through. When trying to use You.com we had issues with the functions saying they're null when on the backend we could see they are not in fact null. We had to contact the You.com team to help tweak the function timeout time so it would not show as null.

## Accomplishments that we're proud of
**-**How many models we've been able to store. Despite working on a tight budget we've been able to train enough models on OpenAI such that a user will always get a personalized site when interacting with our systems.

**-**Persisting through our bugs and technical issues and making a end product that works pretty accurately in such a short amount of time. We ran into what seamed like a countless amount of issues. We are very proud we were able to eventually figure everything out and have a good end-product.

**-**We were able to incorporate ChatGPT to our backend and use a bunch of new technologies that we just discovered at TreeHacks. We took inspiration from the booths, people, and lectures and used a lot of different technologies that we never before have before. 

**-**This is our first major AI project any of our team members have ever worked on and we are really proud we took the leap and were able to use AI in a cool way.

## What we learned
We can confidently say over the last 36 hours we have learned so much. Before the Hackathon we didn't know how to use You.com, OpenAI's API, Trudo, and convex and now we all have a good base understanding of how it works. We also learned a lot more about some of ChatGPT's capabilities in depth and how we can use AI to help us in our projects. Apart from learning a lot about the new technologies we also met and talked to so many interesting and intelligent people. We learned about business, software, relations, and so much more just by putting ourselves out there talking to all the booths and conversing with fellow hackers. 

## What's next for Leviathan
**-**We plan to train some more datasets to hopefully get some more accurate results from our AI. 

**-**We are excited to share our creation and get feedback from Fellow hackers. If people find a use case for it then we will deploy a site and make our creation more public for people to use.

**-**We plan to attend future hackathons and expand on Laviathan's idea making our model faster, more accurate, and more scalable. Using Leviathan as a base, we also plan on making more complex AI models for topics that expand beyond website generation. 
