import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

// import { fetchImages } from 'service/api-images';

// console.log(fetchImages());

export class App extends Component {
  state = {
    pictures: [],
  };

  searchImg = value => {};
  render() {
    return <Searchbar />;
  }
}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
