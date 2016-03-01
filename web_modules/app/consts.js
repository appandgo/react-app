//const apiPath = `https://api.spotify.com/v1/`;
//const apiExplorerPath = `https://artistexplorer.spotify.com/`

const api_path = `http://api.themoviedb.org/3/`;
const api_key = `d07241f7f943c6861fa0a520b52cc049`;
const api_key_formated = `?api_key=`+api_key;

export default {
  api:{
    enpoints:{

      getSearch:(query, type)=>{
        return api_path+`search/${type}/`+api_key_formated+`&query=${query}`;
      },

      getKinds: () =>{
        return api_path+`genre/movie/list`+api_key_formated;
      },

      getMoviesbyKind: (kind) =>{
        return api_path+`genre/${kind}/movies/`+api_key_formated;
      }

    }
  }
}
