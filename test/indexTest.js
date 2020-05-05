const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );


describe( "index.js", () => {
  describe( 'getPosts()', () => {

    beforeEach( () => {
      window.document.body.innerHTML = '<main></main>'
      window.fetch = require( 'node-fetch' );
    } );

    it( "sends a fetch request to 'https://anapioficeandfire.com/api/books'", async () => {
      chai.spy.on( window, 'fetch' );
      await fetchBooks()
      expect( window.fetch, "A fetch to the API was not found" )
        .to.have.been.called.with( 'https://anapioficeandfire.com/api/books' );
    } )

    it( "renders book titles into the DOM by passing a JSON object to renderBooks()", async () => {
      chai.spy.on( window, 'renderBooks' );
      await fetchBooks().then(() => { //fetch books is async, will return promise
        //calling then on promise and expecting render books to have been called once promise resolves
        expect( window.renderBooks ).to.have.been.called();
      })
    } )
  } )
})
