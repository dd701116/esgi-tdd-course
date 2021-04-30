Feature: Sentence Word Counter.  
    As a cli user,  
    I want to count the number of words of a specific sentence,  
    so that I can easily know if my English essay have the good number of words.  

Scenario 1: Proper essay provided.  
    Given that I wrote a proper essay of 100 words with no extra or illegal spaces  
    when I use the word counter cli command with my essay,  
    then I should see that my essay is 100 words-long.

Scenario 2: Essay with extra spaces provided.  
    Given that I wrote a proper essay of 100 words and accidentally added illegal spaces  
    and I accidentally add extra spaces at the beginning and the end of my string  
    when I use the word counter cli command with my essay,  
    then I should see that my essay is 100 words-long.

...
