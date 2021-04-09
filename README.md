## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## Goal:
    have an app that allows user to select some sort of class, input a name and play a game. after the user inputs their info it is stored, and a object is made with all the necisary info. The user will be directed to a map page, that has  links, each link will redirect to a quest page, the info of that page will be based on the search param id. The user will be given a quest, with three options. Depending on which option they pick their hp/gold will be affected in differant ways. After completion they are redirected to the map page. Once all quests have been completed OR the user has run out of HP the user will be directed towards a result page. the info displayed will depend on the users final stats. 

### Data model
        An array of objects:
        Will need to include the quest/situation
        Will need a nested array with the potential choices for each situation
            needs to contain how this choice will affect the state
        Id find the info 
        Other stuff like a title, description, images, maybe some sounds
        Stretch? maybe some pre-stats for classes dif classes
### Pages HTML:
    sign-up
        title
        form with input for name
        choices for class
    map
        div
        Background picture
        3 links (created by looping through quests)
            dif. id for each links url

    quest: (html will be rendered)
        div 
        JS rendered html:
            title, image, description
            form with three choices
            submit button

    results:
        div
        JS rendered textContent displaying results
        button to start over


## Functions:
Local Storage:
    getUser();
        will be set by the initial user object created using sign-up data
    setUser(user)
Utils:
    ApplyUserChoice(choice, quest)
    get user
    get quest choice
    apply quest choice to user stats
    add quest completed to user object


    findByID
        go match things

    isUserDead();
        getUser()
        if user.hp <= 0
    redirect to results ?
    Or return true...
    
    haveAllQuestsBeenCompleted(){
        getUser()
        if the names of each quest line up with completed....

    }

    resultMessage();
        getUser();
        if user has stats within a certain range, return a message based on this

### logic flow

User signs up w/ input and class choices
Object created using user input and class choice
    Contains :
    name:
    class:
    hp:
    gold:
    completed quests: 
            will start as an empty object and have booleans pushed to it

User object set into local storage
redirect to map page

Links for map page rendered by looping through quest data
each link has an id added to its url based it's respective quest id

User clicks on a link
redirected to to a quest page
quest page rendered by matching the id in url using searchParam
    use findById(quests, param.id)
    Render title based on quest title
    render a form
    render image based on quest src
    description

    for each quest.choice
    render a radio button
    value = choice.value
    textContent is the description of the choice
    etc
    append each radio button and all its content to a form
    Do form stuff

    Add an event listener to the form
    more form stuff
    Depending on which radio button is selected:
        apply the outcomes of that choice
            use function
        mark quest as completed

update dom to reflect users current state
redirect to map page

On map page
check to see if the user is still alive
    another function...
    isUserDead();
    if so redirect to results and display they are dead, custom message based on their other stats. another function

    OR
    haveAllQuestsBeenCompleted();
    if so redirect to results, display congrats and custom message.




