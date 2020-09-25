import User from '../components/user.js'

export default function AboutPage(user){
  return(`
  <section>
    <h1>ABOUT PAGE</h1>
    ${User(user)}
  </section>`)
}