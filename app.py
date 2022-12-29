import os 
import random

for i in range(90,300):
    for j in range(0,10):
        d= str(i)
        with open('file.txt','a') as file:
            file.write(d)
        os.system('git add .')
        # os.system('git commit -m "commit' +d + '"')
        os.system('git commit --date="'+ d +' day ago" -m "almost done"')
os.system('git push')


# for i in range(1,10):print('welcome Adal')
    
