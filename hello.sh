#!  /bin/bash
# this is a comment
# echo "Hello World!" #this is also a comment

#     echo $BASH
#     echo $BASH_VERSION
#     echo $HOME
#     echo $PWD

#     value=10
#     echo "The value is $value"

# echo "Enter name : "
#     read name1 name2 name3
#         echo "Entered names : $name1, $name2, $name3"

#Read print single line
# read -p 'username : ' user_var
# read -sp 'password : ' pass_var
# echo
#     echo "username : $user_var"
#     echo "password : $pass_var"

#Multiple user in array WE USE FLAG -a

# echo "Enter names : "
# read -f names
#     echo "Names : ${names[0]}, ${names[1]}"

#No variable after 
# echo "Enter name : "
# read
#     echo "Name : $REPLY"

#How to Pass the arguments to bash
    # echo $0 $1 $2 $3 ' > echo $1 $2 $3'
    # args=("$@") #$@indicates the hole array will be given
    # # echo ${args[0]} ${args[1]} ${args[2]}
    # echo $@ 
    # echo $# #indicates hole index number

    #If statment (if then,if then else,if elif else)
    #syntax of if
    #if[ condition ]
    #then
    #statment
    #fi

    # Count=10
    # if [ "$Count" -eq "10" ]
    #  then
    #         echo "condition is true"
    #             fi

    # word=abc
    # if [ word != "abc" ]
    #     then
    #         echo "condition is true"
    #             fi

    # word=a
    #     if [[ $word == "b" ]]
    #         then
    #             echo "condition b is true"
    #                 elif [[ $word == "a" ]]
    #                     then
    #                         echo "condition a is true"
    #                 else
    #                     echo "condition is false"
    #                         fi

    #File test operator
    # echo -e "Enter the name of the file : \c"
    # read file_name
    #     if [ -e $file_name ] #f is exsited it is a regular file or not -d is also using for directory we can create mkdir dir and we can check
    #     #they are two types of files 1.)block special pic music images videos 
    #     #2.)character file
    #     # -c for chahracter -b for block -s infile there is text or not they check
    #         then
    #             echo "$file_name found"
    #                 else
    #                       echo "$file_name not found"
    #                         fi


    #How to append output to the end of the text file

    # echo -e "Enter the name of the file : \c"
    #      read file_name
    #         if [ -f $file_name ]
    #              then
    #                 if [ -w $file_name ]
    #              then
    #                echo "Type some text data.To quit press ctrl+d."
    #                cat >> $file_name
    #                 else
    #                     echo "The file do not have write permissions"
    #                         fi
    #                             else
    #                                 echo "$file_name not exists"
    #                                     fi


    #Logical  " AND " Operator

    # age=50
    #     if [ "$age" -gt 18 ] && [ "$age" -lt 30 ] #we can use this like also if [[ "$age" -gt 18 && "$age" -lt 30 ]]
    #     #we can use -a also
    #         then
    #             echo "valid age"
    #                 else
    #                     echo "Invalid age"
    #                         fi


    #Logical  " OR " Operator
#     age=60
#   if [ "$age" -gt 18 ] || [ "$age" -lt 30 ] #we can use this like also if [[ "$age" -gt 18 || "$age" -lt 30 ]]
#         #we can use -o also
#              then
#                  echo "valid age"
#                      else
#                          echo "Invalid age"
#                              fi

 #Logical  " Arthematic Operator " Operator
#  num=20
#  num1=25
    # echo "$(( num + num1 ))"
    # echo "$(( num - num1 ))"
    #  echo "$(( num * num1 ))"
    #   echo "$(( num / num1 ))"
    #    echo "$(( num % num1 ))"

       #Anthoer way to write
    #     echo $(expr $num + $num1 )
    # echo $(expr $num - $num1 )
    #  echo $(expr $num \* $num1 )
    #   echo $(expr $num / $num1 )
    #    echo $(expr $num % $num1 )

    # Floating point Math Operations in Bash | bc Command

    # num1=20.5
    # num2=5
        # echo "20.5+5" | bc
        #  echo "20.5-5" | bc
        #   echo "20.5*5" | bc
        #    echo " scale=2; 20.5/5" | bc
        #     echo "20.5%5" | bc

        #     echo "$num1+$num2" | bc
        #   echo "$num1-$num2" | bc
        #    echo "20.5*5" | bc
        #     echo " scale=2; 20.5/5" | bc
        #      echo "20.5%5" | bc

        #      num=4

        #      echo "scale=2;sqrt($num)" | bc -l

        # CASE STATEMNET 
        #syntax for basic case statement
        #case experssion in
        #pattern1 )
        # statement ;;
        #pattern2
        #statement ;;
      #  ...
        #esac

        # vehicle=$1

        # case $vehicle in
        #     "car" )
        #         echo "Rent of $vehicle is 100 dollars" ;;
        #             "van" )
        #         echo "Rent of $van is 80 dollars" ;;  
        #           "bicycle" )
        #         echo "Rent of $bicycle is 500 dollars" ;;
        #            "truck" )
        #         echo "Rent of $truck is 500 dollars" ;;
        #         *)
        #             echo "unknown vehicle" ;;
        #             esac

        #SPECIAL CASE STATEMENT
        # echo -e "Enter some character : \c"
        # read value
        #     case $value in
        #         [a-z])
        #         echo "User entered $value a to z" ;;
        #          [A-Z])
        #         echo "User entered $value A to Z" ;;
        #          [0-9])
        #         echo "User entered $value 0 to 9" ;;
        #          ? )
        #         echo "User entered $value special character" ;;
        #          * )
        #         echo "unknown input" ;;
        #         esac
                #here we execute LANG environment variables indicates the language/locate and encoding,where "c" is the language setting

                # Array Variables
                # os=( 'kareem' 'karthik' 'narendra' )
                # os[3]='vamsi'
                # unset os[2] #unset is to delete 
                # echo "${os[@]}" #@indicates element of the array
                # echo "${os[0]}"
                # echo "${!os[@]}" #to known index of array
                # echo "${#os[@]}" #indicates the length array
                # string=hello
                # echo "${string[@]}"
                # echo "${string[0]}"
                # echo "${string[1]}"

                #While Loops to execute repetedly
                #syntax
                #while [ condition ]
                #do
                # command1
                #command2
                #command3
                #done

                # n=1
                #     while [ $n -le 10 ]
                #         do
                #             echo "$n"
                #                 n=$(( n+1 ))
                #                     done
                

                #using sleep and open terminal with while Loop

                # n=1
                # while [ $n -le 10 ]
                #     do  
                #         echo "$n"
                #         (( n++ ))
                #         sleep 1
                #         done


                #          n=1
                # while [ $n -le 3 ]
                #     do  
                #         echo "$n"
                #         (( n++ ))
                #       gnome-terminal & #xterm also there in ubuntu
                #         done

                #Read a file content Bash
                # while read p  #cat hello.sh | while read p anthoer wave
                # do 
                #     echo $p
                #         done < hello.sh

                #until loops same as while loop it will be work
                #syntax
                #until [ condition ]
                #do
                #command1
                #.
                #.
                #commandN
                #done

                # n=1

                # until [ $n -ge 10 ]
                #     do  
                #         echo $n
                #             n=$(( n+1 ))
                #                 done


                #FOR LOOPS
                 #Syntax
                #for variable in 1 2 3 ..N
                #do
                #command1 on $variable
                #command2
                #commandN
                #done

                # for variable in 1 2 3 4 5 #1..10 with c brackets
                #     do  
                #         echo $variable
                #             done

                # for command in ls pwd date
                #     do
                #         echo "----------------------$command--------------------------------"
                #             $command
                #                 done

                # for item in *
                #  do
                #     if [-d $item ]
                #         then
                #             echo $item
                #                 fi  
                #                     done

                #SELECT LOOP

                #SYNTAX
                #select varName in list
                #do
                #command1
                #.
                #commandN
                #done
                #similar to forloop but we give menu type option
                # select name in kareem karthik vamsi narendra
                #     do
                #         echo "$name selected"
                #             done 

                #BREAK AND CONTINUE
                # for (( i=1;i<10;i++ ))
                # do  
                #     if [ $i -gt 5 ]
                #         then
                #             break
                #                 fi
                #                     echo "$i"
                #                         done

                # for (( i=1;i<10;i++ ))
                # do  
                #     if [ $i -eq 3 -o $i -eq 6 ]
                #         then
                #             continue
                #                 fi
                #                     echo "$i"
                #                         done


                #FUNCTIONS

                #syntax for function
                # function name(){
                  #  commands
                #}
                #name(){
                    # commands
                #}
 #3.) write a shell script that take two input numbers from user at runtime and display arithematic operation on that number, find out max & min number from  them find weather that numbers negative or positive?

#                   echo "First Number :"
#                   read a
#           echo "Second Number :"
#                 read b
#            MinMax() {
# 	 echo "-----------------------------------------------------------------------"
# 	 if [ $a -gt $b ] ; then
# 	 echo "$a is Maximum"
# 	 echo "$b is Minimum"
# 	      else 
# 	echo "$b is Maximum"
# 	echo "$a is Minimum"
# 	    fi
# 	echo "-----------------------------------------------------------------------"
# }

# NegativePositive(){
# 	if [ $a -gt 0 ] ; then
# 		echo "$a is Positive"
# 	else
# 		echo "$a is Negative"
# 	fi
# 	if [ $b -gt 0 ] ; then
# 		echo "$b is Positive"
# 	else
# 		echo "$b is Negative"
# 	fi 
	
# 	echo "-----------------------------------------------------------------------"
# }

# MinMax 
# NegativePositive

# echo "[Choose Operation to perform]"
# echo "1) Addition"
# echo "2) Substraction" 
# echo "3) Division"
# echo "4) Multiplication"
# echo "[  CTR+C to Stop ]"
# echo "-----------------------------------------------------------------------"
# while : ; do  
# read ops
# case $ops in 
# 	1) echo "Addition" :  $((a+b)) ;;
# 	2) echo "Substraction" : $((a-b)) ;;
# 	3) echo "Division" : $((a/b)) ;;
# 	4) echo "Multiplication" : $((a*b)) ;;
# 	*) echo "This is not a choise" ;; 
# esac
# done

#4.) . Write a shell script that take one input number from user and print 1 to n number using three loops (For, while, until). (N = entered number)

# echo "Enter Number :"
# read a 

# While(){
# 	echo "-----------------------------------------------------------------------"
# 	i=1 ;
# 	while [ $i -lt $1 ] ; do
# 		echo "$i"
# 		i=$(($i + 1 ))
# 	done
# 	echo "-----------------------------------------------------------------------"
# }

# Until(){
# 	i=1 ;
# 	until [ $i -gt $1 ] ; do
# 		echo "$i"
# 		i=$(($i + 1 ))
# 	done	 
	
# 	echo "-----------------------------------------------------------------------"
# }
# For(){
# 	for i in ` seq 1 $1 ` ; do
# 		echo "$i"
# 	done 
	
# 	echo "-----------------------------------------------------------------------"
# }

# echo "[Choose Operation to perform]"
# echo "1) While "
# echo "2) Until " 
# echo "3) For "
# echo "[  CTR+C to Stop ]"
# echo "-----------------------------------------------------------------------"
# while : ; do  
# read ops
# case $ops in 
# 	1) echo "Using While Loop:" ; While $a ;;
# 	2) echo "Using Until:" ; Until $a ;;
# 	3) echo "Using For Loop:" ; For $a  ;;
# 	*) echo "This is not a choise" ;; 
# esac
# done
#5.) Write a shell script to display the last updated file of the newest file in a directory?
#     for i in $(ls -t) ; do 
# 	if [ -f $i ] ; then
# 		    echo "Last updated file : In [ $(pwd) ]"
# 		          echo $i
# 		             break 
# 	                             fi
#                                             done

#6.) Write a shell script to get the total count of the word “Linux” in all the “.txt” files and also across files present in subdirectories?

# echo "Total \"Linux\" Words in current directory and Its subdirectories"
# find . -name "*.txt" | xargs grep -o -i "Linux" | wc -l