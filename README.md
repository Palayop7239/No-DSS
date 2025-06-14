# No-DSS
an alternative to the DataStoreService for Roblox
<p><b>you want to save data for players but you dont want to use the DSS for some reason ? this is for you</b></p>



<p>this repo is the server source code that you need to use No-DSS</p>

basically you need :
  - An unused forwarded port (50065 by default but you can change it in app.js)
  - Node.JS
  - a server or whatever (to run the No-DSS server and hosting the database)
  - and the script to put in your ServerScriptService of your game
<p>and thats all</p>


# Tutorial
# Setting Up the server and the database

<p><b>1)Download the server by using the Releases tab on GitHub</b></p>

<p><b>2)Host a local database by using XAMPP or Wampserver64 or whatever</b></p>


<p><b>3)Now go on your sql admin panel (often its php my admin (http://localhost/phpmyadmin)) and login (put root as user and nothing in password ig) </b></p>

<p><b>4)Create a new database and in the SQL tab on the topbar put the following code :</b></p>

![image](https://github.com/user-attachments/assets/57cc804c-0c71-48f9-9f0e-e6af5ae278f3)


```sql
CREATE TABLE `players` (
  `userId` varchar(255) NOT NULL,
  `saveData` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE `players`
  ADD PRIMARY KEY (`userId`);
```
and press 'Execute'

<p><b>5)In the No-DSS server folder , open app.js</b></p>

![image](https://github.com/user-attachments/assets/daf5241f-f534-4250-b700-aa8ae806f725)

Replace the 'database_name' by the name of your database and also replace 'admin' and 'password_if_theres_one' by your phpmyadmin credentials

<p><b>6)Now open the terminal in your folder </b></p>
<p>Right Click menu -> Open in a new Terminal <br>
<b>OR</b> <br>
- Right click on the folder of the No-DSS server and select copy path
- in your terminal type : cd 'paste your path here'
 now type 
</p>
 
 ```
 npm install
 ```
Once all requirements are installed, you can run the server by running :
 ```
 node app.js
 ```
# Setting Up your Roblox Game
This is the easiest part <br>
<p><b>1)Get the script [here](https://create.roblox.com/store/asset/102821444775405) and import it to your game</b></p>
<p><b>2)Place it into ServerScriptService and open the No-DSS script</b></p>

Change the "ip" variable by your server public ip and your forwarded port (example : 192.168.1.1:50065) <br>

And now go in-game and check output, everything should work fine, if you need help with fixing errors or whatever, come on my community [Discord Server](https://discord.com/invite/QnBrxurD9g)





