import React from 'react';

const StartGame = ({loadGame}) => {


  return (
    <article style={{backgroundColor:'white'}} className="br3 ba b--black-10 mv4 w-50 mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="play_game" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 tc">Gamer Sign On</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="gamer_tag">Gamer Tag</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                       type="text"
                       name="gamer_tag"
                       id="gamer_tag"
                       placeholder='Enter gamer tag or play as guest'
                       />
              </div>
            </fieldset>
            <div className="">
              <button onClick={loadGame}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                Play Game!
                </button>
            </div>
          </div>
        </main>
      </article>
  )
}

export default StartGame;
