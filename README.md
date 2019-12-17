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
  5. Show page: Displays the selected specific problem text and image if it exists, as well as the submitted answer that is initially hidden, but can be revealed upon clicking a "show answer" button
  6. Users will be able to join groups that share submitted questions

Database Table Entries:
  * users, familiarity_categories, problem_categories, submitted_problems, groups, comments, 
  * groups joins table:
    * will have many users, many users belong to a group
    * comments: author_id, body, problem_id
    * submitted_problems: 
      * belongs_to categories, 
    * categories: 
      * has_many submitted_problems, 



Leitner Method System of Studying:
  * Doubly-linked list of "boxes": 
    * Box 1: Review every day
    * Box 2: Review Tues & Thurs
    * Box 3: Review Fri
    * Box 4: Review at the end of the month
  


%----------------------------------------------------%
 Database stores the submitted_problems with the
 appropriate associations
%----------------------------------------------------%

Submission
belongs_to :submittor, polymorphic: true

User
has_many :submitted_problems, as: :submittor

Group
has_many :submitted_problems, as: :submittor

create_table :submissions do |t|
  t.string :title
  t.references :submission, polymorphic: true
  t.string :body
  t.string :answer
  t.timestamps
end


%---------------------------------------------------------%
 When the submitted_problems are fetched from the backend 
 via AJAX requests, it'll then be organized into a 
 doubly-linked-list to be used as Leitner boxes:
%---------------------------------------------------------%

[A,B,C]       [D,E]         [F]          [G]
|------| --> |------| --> |------| --> |------|
| Box1 |     | Box2 |     | Box3 |     | Box4 |
|______| <-- |______| <-- |______| <-- |______|
 Every        Tues,        Fri          Monthly
 Day          Thurs

class Box_Node
constructor(array): this.next = null, this.prev = null, this.value = array

class Doubly_Linked_List
constructor(): this.head = null, this.tail = null, this.length = 0
- def add_to_tail(array = [])
- def remove_tail()
- def add_to_head(array = [])
- def remove_head()
- def contains(target)
- def get(index)
- def set(index, val)
- def insert(index, val)
- def remove(index)
- def size()
- def move(target) => this method should find the node where the given problem exists,
                      remove it from that node, then, depending on whether an input "success"
                      is true or false, it will be added to the array in either the previous
                      or next node's array value


state shape:
{
  entities: {
    users: {
      0: {
        id: 0,
        username: "User1",
        submittedProblemIds: [1,2,3,4],
        commentIds: [],
      }
    },
    submissions: {
      0: {
        id: 0,
        title: "Two Sum",
        body: "Write an algorithm for two sum",
        answer: "some 2-sum algorithm",
        submittorId: 0,
        groupId: 0,
      },
      1: {
        id: 1,
        title: "Personal Pitch",
        body: "Tell me about yourself",
        answer: "I'm a software engineer, hire me pls",
        submittorId: 0,
        groupId: 0,
      }
    },
    groups: {
      0: {
        id: 0,

      },
      1: {
        id: 1,
        
      }
    }
  }
}