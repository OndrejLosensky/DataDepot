# Story of this app
On the day 9.3. in year 2024 I created this project. I am learning as I create new functions, styling and more. Each day I work on something I think like doing that day.

# Daily activity
I try to add new notes each day that I work on this project, but I forgot a lot.

--- 

## Day 1 - 16.4. 2024
I have created an first base look for the Passwords Management Tool. I have also created an **ProgressBarRadial** that is for closed Sidebar to also show an usage of the storage. Also I tried to add some details to settings component. Yesterday I also added profile pictures to select from in the future. + Quick feature to toggle the sidebar by clicking `CMD` + `H` - to hide or show

Today I have found out about Pocketbase which I like and most likely will implement as main backend. Then I slightly changed the image thats on Hero section on the Landing page. I have changed Error and Success alerts UI and added function to detect if the password is the same and if it has minimaly 8 characters. 

Finally today I have added an function to log out when user is AFK. I have implemented it to the **RequireAuth** that renders the Dashboard. Today I did a lot of changes and work done. Including preparations for UsersPage for admin only.

Spent hours today: `5 Hours & 30 min`

--- 
## Day 2 - 17.4 2024
On this day I havent done pretty much anything. Primary I added new section called the **Lab** where i can now test components, For users it wont be avaiable. Also I have an Users section that will be only for Admin. 

I updated `Password manager` to have an button that will be generating passwords. Then I have copied the same layout to the `Files` and created an demo look of how the each cart/folder could look like. Now I an few days I would like to implement and beter graphs as a testing in the Lab and Finish the Analytics and Users page UI 's so I can finally start making it work

Spent hours today: `1 Hour & 45 min` 

--- 

## Day 3 - 18.4. 2024 
Today I a have imported some of my code into the Lab components where it will be my kinda "playground". Then I did some minor changes in the UI. Changed color of all cards to the same that look better on the contrast of the BG. Then I have finally started creating a functional `Password Manager`. I created an sqlite3 db with folders and passwords tables. Now the component can create an folder and save it in the db and then i can load them. 

Then i created an **Generate Password** component and added a button to the manager that opens it. The opening and changing those two components is simply handled using useState.

Also the Overview component was merged into the Analytics.

Spent hours today: `3 Hours `

---


## Day 4 - 19.4. 2024

Today I created an BTC graph using **Chart.js** So i could learn about using it for the analytics. The btc graph is inside the Lab. Then I added new button that will be for switch files or passwords layout. And the main thing I did was creating new more simple UI for the LoginPage that I will finish soon. 

Also I found some inspiration how to adjust the whole UI inside the dashboard. More updates coming soon. This is **4th day** in a row that I added to this file.

Spent hours today: `1 Hour 57 min`

--- 


## Day 5 - 20.4. 2024 
Today I finally tried creating basic logic behind the folder system for passwords. Also It can fetch the date with number of added password (This function will be used inside the Analytics page)

Also I created the functionality to open help page which is just blank now. 

P.S. Today I did not have mood to work as I was really exhausted from last week.

Spent hours today: `1 Hour 39 min`

--- 

## Day 6 - 21.4. 2024 
Today I have created almost functional responsive landing page. Also I found out more ideas to adjsut my UI. The register page has an new UI same as the login page that i did yesterday. 

On sunday I did not work as much because I wanted to rest. In the week I will do more work.

Spent hours today: `2 Hours 30 min`

---

## Day 7 - 22.4. 2024 
I did not have much time, because I needed to learn for my final exams, but I have made somehow working Password manager, you can currently create new folder, and then open it as new component folder. All passwords are displayed by the selected folder. You can also add the password from the main page, but the UI is really ugly. I need to work on that later on.

Also whole code needs to be refractored and simplified so it doesnt get laggy, there is so many unused imports for some type of icons or I dont even know what. 

At the end of the day i finally downloaded VS Cod Insiders so I can try new features and while learning those features a fixed the password uploading to the database. Now you can add folders, passwords and manage them.

*Today is the 7th day in a row working on the project so here are few images of the look:*
<img width="500" alt="Snímek obrazovky 2024-04-22 v 19 59 32" src="https://github.com/OndrejLosensky/DataDepot-v1/assets/127244546/ecc8b942-2616-4847-a189-5f6d42ce272b">
<img width="500" alt="Snímek obrazovky 2024-04-22 v 19 59 57" src="https://github.com/OndrejLosensky/DataDepot-v1/assets/127244546/71928e60-9cc4-4a9b-949e-4fee0e0851cb">
<img width="500" alt="Snímek obrazovky 2024-04-22 v 20 00 04" src="https://github.com/OndrejLosensky/DataDepot-v1/assets/127244546/d59e03c9-47e2-4bea-be78-72f557048eb7">
<img width="500" alt="Snímek obrazovky 2024-04-22 v 20 00 24" src="https://github.com/OndrejLosensky/DataDepot-v1/assets/127244546/2faf47d4-4e74-4ae8-8741-df75b1dd35ee">



Spent hours today: `2 Hours 30 min`

--- 

## Day 8 - 23.4.2024
I have cleared out the code a little today, I tried to remove all unused imports of components or icons. 

Also it finally fetches the number of added passwords and folders to the Analytics page. The page with the passwords is still kinda broken. After a while stalled API requests crash the database, but I cannot find the solution for it today.     

Lastly I made basic UI design for the passwords page (when you open the folder/vault with passwords.) It calculates the stength of the password, shows name, app and password. Also I added number of passwords in the current folder, some action buttons and more. In the next step I would like to have an option to re-generate current password with the algorithm that creates them. Also automatically applying icons for the names of the folders would be cool. Maybe with some AI algorithm that would predict it.

Spent hours today: `2 Hours 46 min`

--- 

## Day 9 - 24.4.2024 
Today I did not have the time to create some really usefull function to move on with the project, but i managed to create API endpoint that make the function to delete folders.

Also description input was added inside the form when creating new folder.

*Tommorow I got my first final exams so i need to sleep and get ready for that*

Spent hours today: `39 mins`

--- 

## Day 10 - 25.4. 2024 
Today I got the first half of my practical exams. So i was tired, but I managed to create better alerts for when you delete password folder, then also I added alert that asks again if you want to delete the chosen folder. 

As a last thing I made new form to add password directly in the opened folder. It looks like its a new line but with blank inputs. Also I have prepared better Strength indicator and upgraded copyToClipboard function too.

I still haven't gotten to the part where I need to figure out how to solve the stalled requests when managing the folders. It will be laggy soon i think.

*Tommorow is the second part of practical exams*

Spent hours today: `1 Hours 57 mins`

--- 


## Day 11 - 1.5. 2024
For last few days i did not have any time and motivation to work on this project as my final exams are getting closer and closer.

Today I have created simple pagination component for future expansion of password manager. Then i created Search Input component with animated grow effect when clicked inside. And Lastly I have added state where it says no folders if users doesnt have any folders.

Also the banner is now closeable and ready to have password health/statistics displayed.

Yesterday i worked a little too and managed to create cool feature where is it possible to change icon for each row of passwords (It doesnt save the selected icon to the database yet). And also each password can be deleted now from those lists.

Spent hours combined: `4 Hours 23 mins`

--- 

## Day 12 - 2.5. 2024
Today I have added new component for selecting how many folders user wants to see on the page. Then I finally fixed the layout of the Whole password manager. In the morning I have also made little adjuments in the folders of this project and grouped some components. 

Also I have found some inspiration that I will integrate later on. Its some cool UI features to make everything look even better. 

I have also found out that the current grid of those password folders it broken when i try to rezise to list view and that pagination doesnt work yet.

I plan to implement working statistics soon so i can see already what i am doing how many times a day etc.

Spent hours today: `1 Hour 57 mins`

---

## Day 13 - 3.5. 2024
Today I have only added 7 Google fonts that i will choose to use. My most possible choice is Inter or Sora font. 

Also i made functional chart according to uploaded passwords inside the Analytics page. It now works somehow. Later on I will do the same for passwords and folders.  

New section thought added: **Coding Snippets** (Efficient way to store code of different languages, developments and more...). I have also searched for some inspo to create good-looking UI. v

Spent hours today: `2 Hours 18 mins`

--- 

## Day 14 - 7.5. 2024
Today I learn basic of Typescript and tried to create simple to-do component for testing. Then I tried to make working percentage count for the analytics graphs but i gave up after 3 hours of trying. I will complete the UI first. 

I spent like 6 hours of this day to learn for my final exams, so not much time left. 

Spent hours today: `4 Hours 22 mins`

–––

## Day 15 - 8.5. 2024
Today I started of with fixing the percentage and It was pretty simple. Yesterday I was just tired to think. So now it has an dynamic percentage + chart for Passwords, Folder and for new item which are Coding snippets. I managed to create really basic component with pagination.

I have also changed the analytics page a little and last remaining chart for documents is **Notes**, The last section of this app. Where users can also store theirs notes efficiently.

The Analytics page will also have an folders card with biggest folders to access quickly

Today I will also create an Getting started page for new users 

Codding snippets now fully functions in a basic version. You can add snippet, delete it and more. Also it has an functioning pagination.

Create an simple, but cool looking get started page. It has 6 button to navigate more as the user wants. Also i made basic wireframe for the Notes section so I can create graph and couting system for it. That will be last thing for first section of Analytics page.

Spent hours today: `5 Hours 31 mins`

---