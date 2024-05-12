function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value;

    if (message !== "") {
        var chatBox = document.getElementById("chat-box");
        var newMessage = document.createElement("p");
        newMessage.textContent = "You: " + message;
        chatBox.appendChild(newMessage);
        userInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
