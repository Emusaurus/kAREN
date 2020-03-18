from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

chatbot = ChatBot('Yeetie')

# Create a new trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)

# Train the chatbot based on the english corpus
trainer.train("chatterbot.corpus.english")
trainer.train("chatterbot.corpus.custom")

# Get a response to an input statement
chatbot.get_response("Hello, how are you today?")
print("-------------------------------------------------------------")
run=1

while run==1:
	request = input('You: ')
	response = chatbot.get_response(request)

	print('Yeetie: ', response)


