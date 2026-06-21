function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value;

  if (message === "") return;

  let chatBox = document.getElementById("chat-box");

  chatBox.innerHTML += `
    <div class="user-message">${message}</div>
  `;

  setTimeout(() => {
    chatBox.innerHTML += `
      <div class="bot-message">
        PakChat AI: You said "${message}"
      </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
}
