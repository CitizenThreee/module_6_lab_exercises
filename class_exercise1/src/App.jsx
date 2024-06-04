import './App.css'
import Comment from './Comment'

function App() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://images6.fanpop.com/image/photos/41400000/Cute-Little-Kitten-cats-41418560-600-900.jpg',
    },
  };

  return (
    <>
      <Comment author={comment.author} date={comment.date} text={comment.text}/>
    </>
  )
}

export default App
