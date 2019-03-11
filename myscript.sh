#! /bin/bash
# echo Hello world!
# Name="karthik"
# echo "$Name is a good boy"
# echo "${Name} is a good boy"
#User input
# read -p "Enter your name:" Name
# echo "Hello $Name, nice to meet you"

#simple If statement else and elif
#     if [ "$Name" == "kishore" ];
# then
#         echo "your name is kishore"
#      elif [ "$Name" == "Vamsi" ]
# then
#        echo "your name is Vamsi"
#      else
#        echo "Your name is not kishore"
#     fi

#Comparsion
# Num1=31
# Num2=5
# if [ "$Num1" -gt "$Num2" ]
#   then
#      echo "$Num1 is greater than $Num2"
#         else
#             echo "$Num1 is less than $Num2"
#                 fi

#File conditions
# File="test.txt"
# if [ -f "$File" ]
#     then
#     echo "$File is a file"
#         else
#     echo "$File is not a file"
#             fi

# Case Statment
# read -p "Are you 21 or over? Y/N " Answer
# case "$Answer" in
#     [yY] | [yY][eE][sS])
#     echo "you can have a beer :)"
#         ;;
#         [nN] | [nN][oO])
#             echo "Sorry, no drinking"
#             ;;
#             *)
#                 echo "Please enter y/yes or n/no"
#                 ;;
#                     esac

#simple For loop

# Names="kareem kishore vamsi narendra"
# for Name in $Names
#     do
#         echo "Hello $Name"
#             done



#For Loop To Rename Files
# Files=$(ls *.txt)
#   New="sample"
#     for File in $Files
#         do
#             echo "Renaming $File to sample-$File"
#                 mv $File $New-$File
#                     done


#While Loop -Read Through A File Line By Line

# Line=1
# while read -r Current_Line
#     do
#         echo "$Line: $Current_Line"
#             ((Line++))
#                 done < "./test.txt"


#Function
# function sayHello(){
#     echo "Hello World!"
# }
# sayHello

#Function With Params
# function greet(){
#     echo "Hello, I am $1 and I am $2"
# }
#     greet "kareem" "25"

# Create Folder And write To A File
mkdir hello
touch "hello/world.txt"
    echo "Hello World" >> "hello/world.txt"
        echo "Created hello/world.txt"