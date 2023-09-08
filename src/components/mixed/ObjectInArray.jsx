import { useState } from "react";

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const ObjectInArray = () => {
  const [myList, setMyList] = useState(initialList)
  const [yourList, setYourList] = useState(initialList)

  function handleToggleMyList(artworkId, nextSeen) {
    // const myNextList = [...myList];
    // const artwork = myNextList.find(
    //   a => a.id === artworkId
    // )
    // artwork.seen = nextSeen
    // setMyList(myNextList)
    setMyList(myList.map(artwork => {
      if ( artwork.id === artworkId) {
        return {...artwork, seen: nextSeen}
      } else {
        return artwork
      }
    }))
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if(artwork.id === artworkId) {
        return {...artwork, seen: nextSeen}
      } else {
        return artwork
      }
    }))

    // const yourNextList = [...yourList];
    // const artwork = yourNextList.find(
    //   a => a.id === artworkId
    // )
    // artwork.seen = nextSeen
    // setYourList(yourNextListx )
  }


  return (
    <>
      <h2>My List</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList}/>
      <h2>Your List</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList}/>
    </>
  )
}

const ItemList = ({artworks, onToggle}) => {
  return (
    <>
      <ul>
        {
          artworks.map((artwork) => (
            <li key={artwork.id}>
              <input type="checkbox" checked={artwork.seen} onChange={(e) => {onToggle(artwork.id, e.target.checked)}}/>
              <label>{artwork.title}</label>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default ObjectInArray