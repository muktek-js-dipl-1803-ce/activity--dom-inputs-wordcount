function handleUserTyping(evtObj){
  // (1) - select element where you will write the value
  var charCountEl = document.querySelector('.char-count')

  // (2) collect input dom el from event object
  var inputEl = evtObj.target

  // (3) Get user input text off inut dom element
  var inputVal = inputEl.value

  // (4) Assign input value length as text content
  charCountEl.textContent = inputVal.length
}

function sliceMaxText(){
  // (1a) - select char-max element (to get <p class="char-max">25</p>
)
  var charMaxEl = document.querySelector('.char-max')

  // (1b) - select user-input element (to access value of  <p class="char-count">0</p> )
  var usrInputBoxEl = document.querySelector('.user-input')

  // (1c)  - select char-count output display
  //         (to overwrite the length when user text input value is sliced)
  var charCountEl = document.querySelector('.char-count')


  // (2)  - get the max words value from <p class="char-max">25</p>
  var maxWords = parseInt(charMaxEl.textContent)

  // (3)  - get the user input text value
  var currentUserInput = usrInputBoxEl.value

  // (4)  - reassign the value of the user-input text to a length of 25 words
  usrInputBoxEl.value = currentUserInput.slice(0, maxWords)

  // (5)  - reassign the text content of the char-count elemnent
  //        with the new user input length
  charCountEl.textContent = usrInputBoxEl.value.length
}



var usrInputEl = document.querySelector('.user-input')
var btnCharCountEl = document.querySelector('.btn-charcount')

//(1) listener for typing on <input type="text" class="user-input">
//    ... changes the 'Character Count' value

usrInputEl.addEventListener('input', handleUserTyping)


//(1) listener on buttn <button class="btn-charcount">Enter Words</button>
//    ... slices the text to 'Max Characters' value
btnCharCountEl.addEventListener('click', sliceMaxText)
