const chatForm = document.forms.chatForm
const socket = io()
console.log(socket)

let chatUsername = document.querySelector('#chat-username')
let chatMessage = document.querySelector('#chat-message')

socket.on('connect', () => {
  if (chatForm) {

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault()
      socket.emit('postMessage',{
        username: chatUsername.value,
        message: chatMessage.value,
      })
      chatMessage.value=''
      chatMessage.focus()
    })

    socket.on('updateMessages', (data) => {
      showMessage(data)
    })
  }
})

const showMessage = (data) => {
  let chatDisplay = document.querySelector('.chat-display')
  let newMessage = document.createElement('p')

  if (chatUsername.value === data.username) {
    newMessage.className = 'bg-success chat-text'
  } else {
    newMessage.className = 'bg-warning chat-text'
  }
  newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message
  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild)
}
