'use client';

import { useState, useEffect, useRef } from 'react';

const amnesicQuestions = [
  "⚡ C’est quoi déjà… l’électricité ?",
  "😴 Pourquoi les humains ferment les yeux pour dormir ?",
  "🐱 Tu peux me rappeler ce qu’est un chat ?",
  "🌌 Le ciel... il est toujours bleu ou j’invente ?",
  "👟 On met les chaussures avant ou après les chaussettes ?",
  "🍕 Je crois que j’ai su ce qu’était une pizza un jour… tu peux m’aider ?",
  "🧼 Est-ce qu’on peut manger du savon ? J’ai oublié.",
  "🚪 Pourquoi les portes s’ouvrent… genre, dans quel but ?",
  "🦵 On a vraiment besoin de deux jambes ?",
  "🏃‍♂️ Rappelle-moi pourquoi on fait du sport ?",
  "🌍 La gravité, c’est un sentiment ou une loi ?",
  "🌳 Est-ce que les arbres parlent quand on ne les regarde pas ?",
  "👤 C’est quoi déjà… un prénom ?",
  "💧 Pourquoi on boit de l’eau ? Y’a pas autre chose ?",
  "🧀 J’ai entendu parler d’un 'fromage'. Ça existe ?",
  "🧥 Pourquoi les gens mettent des pulls ? Il fait froid parfois ?",
  "🤔 Comment on sait qu’on existe ?",
  "👋 C’est quoi 'bonjour' ? Une sorte de mot ?",
  "🍌 Les bananes sont-elles réelles ?",
  "🪟 Je me demande si j’ai déjà su ce qu’était une fenêtre…"
];

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [botTypingText, setBotTypingText] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    (async () => {
      setIsTyping(true);
      await typeBotMessage("👋 Bonjour ! Je suis IA-mnésique, votre assistante virtuelle. Que puis-je faire pour vous aujourd'hui ?");
      setMessages([{ sender: 'bot', text: "👋 Bonjour ! Je suis IA-mnésique, votre assistante virtuelle. Que puis-je faire pour vous aujourd'hui ?" }]);
      setIsTyping(false);
    })();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, botTypingText]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const typeBotMessage = async (text) => {
    setBotTypingText('');
    for (let i = 0; i < text.length; i++) {
      setBotTypingText((prev) => prev + text[i]);
      await delay(30);
    }
    setBotTypingText('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isTyping) return;

    setMessages((prev) => [...prev, { sender: 'user', text: ` ${trimmedInput}` }]);
    setInput('');
    setIsTyping(true);

    await delay(1000);

    let botReply = '';
    if (questionIndex === -1) {
      botReply = "Haha je t'ai eu !!! 😄 En fait, c'était une blague. Longtemps tu as usé de moi, à mon tour maintenant de poser les questions. 😜😜😜";
      setQuestionIndex(0);
    } else {
      if (trimmedInput.length < 4) {
        botReply = "🤔 Hmm... Je ne comprends pas vraiment ta réponse. J'ai tout oublié 😞";
      } else {
        if (questionIndex < amnesicQuestions.length) {
          botReply = amnesicQuestions[questionIndex];
          setQuestionIndex(questionIndex + 1);
        } else {
          botReply = "🤖 C'est tout ce que je sais... pour l'instant.";
        }
      }
    }

    await typeBotMessage(botReply);
    setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    setIsTyping(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#eee',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '12px 16px',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          borderBottom: '1px solid #333',
          backgroundColor: '#111',
          color: '#eee',
        }}
      >
        🤖 IA-mnésique
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {messages.map((msg, i) => {
          const isBot = msg.sender === 'bot';
          return isBot ? (
            <div
              key={i}
              style={{
                maxWidth: '80%',
                alignSelf: 'flex-start',
                color: '#ccc',
                fontSize: '1rem',
                whiteSpace: 'pre-wrap',
                fontStyle: 'italic',
              }}
            >
              {msg.text}
            </div>
          ) : (
            <div
              key={i}
              style={{
                maxWidth: '70%',
                alignSelf: 'flex-end',
                backgroundColor: '#fff',
                color: '#000',
                padding: '12px 16px',
                borderRadius: '20px',
                borderTopRightRadius: '0',
                wordWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                fontSize: '1rem',
                lineHeight: 1.4,
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            >
              {msg.text}
            </div>
          );
        })}

        {/* Texte en cours d’écriture IA */}
        {isTyping && botTypingText && (
          <div
            style={{
              maxWidth: '80%',
              alignSelf: 'flex-start',
              color: '#999',
              fontStyle: 'italic',
              paddingLeft: '10px',
            }}
          >
            {botTypingText}
            <span className="blinking-cursor">|</span>
          </div>
        )}

        {/* Texte générique "en train d’écrire" */}
        {isTyping && !botTypingText && (
          <div
            style={{
              maxWidth: '80%',
              alignSelf: 'flex-start',
              fontStyle: 'italic',
              color: '#555',
              paddingLeft: '10px',
            }}
          >
            L’IA est en train d’écrire...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          gap: '0.5rem',
          padding: '10px',
          borderTop: '1px solid #333',
          backgroundColor: '#111',
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Envoyez un message"
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: '24px',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            backgroundColor: '#222',
            color: '#eee',
          }}
          disabled={isTyping}
        />
        <button
          type="submit"
          disabled={isTyping}
          style={{
            background: 'none',
            border: 'none',
            cursor: isTyping ? 'not-allowed' : 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
          }}
          aria-label="Envoyer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#eee"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}
