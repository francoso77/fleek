from cs50 import get_string


letras = 0
frases = 0
palavras = 0

texto = list(get_string("Texto: "))

for i in texto:
    
    if i.isspace():
        palavras +=1

    if i.isupper() or i.islower():
        letras +=1

    if i in [".", "!", "?"]:
        frases += 1

palavras +=1
print("Palavra: ", palavras)
print("Letras: ", letras)
print("Sentenças: ", frases)