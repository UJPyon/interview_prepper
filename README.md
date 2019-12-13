Notes on 3rd Project Ideas:

Rich text editor for studying (save leetcode/whiteboarding problems covered, saves it to a list of problems you've done, and you can grab a randomized problem later to practice)
Interview Prepper / Helper:
  * You log interview/leetcode problems you've covered on a specific day along with either a photo of the solution or submit your typed solution code/answer
  * Stores these problems/answers into the database under diff categories (leetcode, trivia questions, behavioral questions)
  * Keeps track of and logs how many of each you did each week
  * Each next day it will spit out x number of questions covered on the previous day for you to practice interview whiteboarding
  * Should be able to store strings of text for questions and answers, OR if it's a leetcode problem maybe it can look it up on the website and pull the outline for it and format it on the site along with your submitted answer
  
Save your covered problems/materials in 3 different understanding categories, based on Brian Scott's lecture about how to study for assessments (the Leitner Method of studying):
  1. Pile for concepts and problems you understand very well, rarely need reviewing b/c it's already known (green)
  2. Pile for concepts and problems for topics and problems you're iffy on (orange)
  3. Pile for concepts and problems you don't yet fully understand or could use more practice to cement the idea (red)
Review all orange pile problems and concepts, if you get it right the problem can be marked as green; if you get it wrong, it will get marked as red.
This study-helper site will be designed to be used for individual usage, but it's creation is in recommending pair or group studying, as a group can collectively share the problems they have worked on and take turns reviewing/whiteboarding/mock interviewing each other using questions and material that's already been covered.

MVP's:
  1. User authentication
  2. Dashboard page, where you can navigate to submitted problems based on categories
    * Should have search functionality to look up any of the user's previously submitted questions/answers
  3. Log new entry page: Users will be able to log new entries for problems, and specify the category using a dropdown menu with choices: leetcode, trivia, behavioral, other/misc. User submission forms should be able to include text, images, and code snippets.
  3. Review page: Section for reviewing past day/week problems for whiteboarding practice to solidify understanding & practice interviewing
    * This will randomly grab a question from the selected category of covered material from either the previous day, week, or any specific time period
  5. Show page: Displays the selected specific problem text and image if it exists, as wel as the submitted answer that is initially hidden, but can be revealed upon clicking a "show answer" button
  6. Users will be able to join groups that share submitted questions

Database Table Entries:
  * users, familiarity_categories, problem_categories, submitted_problems, groups, comments, 