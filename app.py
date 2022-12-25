import os 
import random

for i in range(1,10):
    for j in range(0,10):
        d= str(i) + 'days ago'
        with open('file.txt','a') as file:
            file.write(d)
        os.system('git add .')
        os.system('git commit -m "commit' +d + '"')
os.system('git push')