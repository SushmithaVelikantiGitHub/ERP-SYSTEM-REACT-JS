# Simplified ERP System using React JS

This repository contains the front end code for a web application. The application allows users to manage products and orders and also order calendar views to 
see the expected delivery date of the order. It is built using React.
## Pre-requsites for project setup
<dl>
  <dh>Visual code : </dh>
  <dd>Install visual code using https://code.visualstudio.com/download.</dd>
  <dh>Node Js: </dh>
  <dd> Install the Node js using https://nodejs.org/en/download</dd>
</dl>

## How to run the project
<ul>
<Li>
<dl>
 <dh> Clone the project to the local machine using the following command </dh>
<dd> git clone [repository url]  </dd>
</dl>
</Li>
  <li>
 Open the cloned project in visual studio
 </li>
   <br>
 <li></dl>
   <dh> Navigate to the Project Directory : change to the project directory using following command  </dh>
 <dd>cd [project directory] </dd></dl>
 </li>
  <br>
  <li>
    <dl>
      <dh> Install the Dependencies Using following Commands </dh>
      <dd>npm install</dd>
      or<br>
      <dh>npm install react-scripts --save-dev</dh>
    </dl>
  </li>
    <li>
    <dl>
      <dh>Run the Application Using the following Command</dh>
      <dd>npm start </dd>
    </dl>
  </li>
 </ul>
 
## Access the Application 
### Once the Project is running in the sever we can access the application by using the following urls
<ol>
  <li> Home Page :   http://localhost:3000   </li>
  <li>DashBord :     http://localhost:3000/dashboard </li>
  <li>Products Inventory : http://localhost:3000/product </li>
  <li>Orders Inventory : http://localhost:3000/order </li>
  <li>Calender View : http://localhost:3000/calenderView </li>
</ol>

## Overview of Functionalities
### Dashboard

The dashboard mainly contains summary of key metrics and buttons to navigate to the  Produts Inventory,orders Inventory and calender view

<img width="958" alt="Screenshot 2024-03-15 115927" src="https://github.com/SushmithaVelikantiGitHub/ENTNT/assets/147134324/3a7aa79c-c71d-4202-98a2-285baff176fe">



### Products Inventory

This mainly contains products metrics and Allows to create,edit and delete the products

<img width="947" alt="Screenshot 2024-03-15 135031" src="https://github.com/SushmithaVelikantiGitHub/ENTNT/assets/147134324/b66d0a23-f603-4256-b6d2-b6fe71191a91">


#### Add new Product
Here we can add a new Product to the product Inventory by clicking on the 'Add product' button. After selecting ' Add Product ' ,It asks to give product details such as 
product name,category,price,stock in quantity and finally select the save option. Then the product will add to product list

<img width="935" alt="Screenshot 2024-03-15 135301" src="https://github.com/SushmithaVelikantiGitHub/ENTNT/assets/147134324/c24f972e-f187-48b8-bb3c-0be9323c8d29">


#### Delete the product
We can able to delete the product by clicking on the delete button. It deletes the selected product

<img width="951" alt="Screenshot 2024-03-15 140426" src="https://github.com/SushmithaVelikantiGitHub/ENTNT/assets/147134324/c11d0e2c-658d-440a-96ea-c7cab0e067ee">


#### Edit the product
 We can able to edit the product details by clicking on the edit button .It allows to edit the product name,category,price,stock quantity

<img width="931" alt="Screenshot 2024-03-15 140848" src="https://github.com/SushmithaVelikantiGitHub/ENTNT/assets/147134324/8e6d76e5-6832-4616-941f-45fe8ecc01bc">

### Orders Inventory
Orders inventory mainly contains the orders details such as order Id ,customer name,order date,status of the order

<img width="917" alt="Screenshot 2024-03-15 141842" src="https://github.com/SushmithaVelikantiGitHub/ENTNT/assets/147134324/24976f20-71a8-40be-9020-b75d1b399b81">

#### View details of an order
we can able to view full details of the particular order by clicking on the view details button

<img width="952" alt="Screenshot 2024-03-15 142006" src="https://github.com/SushmithaVelikantiGitHub/ENTNT/assets/147134324/70db12e5-ddda-42b1-a5d4-57bc3323e71a">

#### update status  and delete the order
we can able to update the status of the order by clicking on the ship button  and delete by clicking on the delete button

<img width="603" alt="Screenshot 2024-03-15 142533" src="https://github.com/SushmithaVelikantiGitHub/ENTNT/assets/147134324/861f6bc5-26ae-4aa6-a89a-0fdfcc8a7868">

### Orders calender view

Orders calender view mainly provides functionality to click on a date to view all orders due for that day

<img width="945" alt="Screenshot 2024-03-15 142822" src="https://github.com/SushmithaVelikantiGitHub/ENTNT/assets/147134324/76693d6c-a5c2-4ee9-bde0-fa932f194151">
<br>

Here we are selecting the date march/15/2024 and It is giving the Orders for Fri Mar 15 2024 and delivery status
<br>


<img width="960" alt="Screenshot 2024-03-15 143156" src="https://github.com/SushmithaVelikantiGitHub/ENTNT/assets/147134324/26ec1992-3c58-42ed-876d-85dbefb0f1ad">



