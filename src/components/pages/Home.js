import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import InfiniteScroll from "react-infinite-scroller";

import Service from '../../libs/service';
import {convertNumber,getDays} from '../../helpers/Utils';


export default function Home(props) {

  const [repositories, setRepositories] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  useEffect(() =>{
    //to load repositories
    loadMoreRepositories();
  },[]);

  const loadMoreRepositories= () =>{
    setHasMore(true);
    const apiEndpoint =`search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`;

    Service.get(apiEndpoint)
    .then(response => {
      if(response.data.items!=null){
        //add the new value of repositories to old one and Increment page
        setRepositories(repositories => repositories.concat(response.data.items));
        setPage(prevPage => prevPage + 1);
      }
    })
    .catch(error => {
      setHasMore(false);
      console.log(error);
    })
  };

  return(
    <div className="container" style={{minHeight:"550px"}}>
      <InfiniteScroll
        loadMore={loadMoreRepositories}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {repositories.map((repository, index) => (
          <div key={index} className="card my-3" style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)"}} >
            <div className="row no-gutters" >
              <div className="col-auto" >
                <img src={repository.owner.avatar_url} style={{width:"200px",height:"100%"}}/>
              </div>
              <div className="col ml-2" >
                <div className="card-block px-2" >
                  <h3 className="card-title mt-2 mx-2 p-1">{repository.name}</h3>
                  <p className="card-text mt-3 mx-2 p-1" style={{fontSize:"20px"}}>{repository.description ? repository.description : 'No description'}</p>
                  <hr className="my-3" />
                  <div className="my-3 sm-block">
                    <span className="mx-2 p-1" ><i className="fa fa-star mx-2" style={{color:"orange"}}></i>  {convertNumber(repository.stargazers_count,2)}</span>
                    <span className="mx-2 p-1" ><i className="fa fa-bug mx-2" style={{color:"orange"}}></i> {convertNumber(repository.open_issues_count,2)}</span>
                    <div className=" mx-2"><i className="fa fa-clock-o mx-2" style={{color:"orange"}}></i> submitted {getDays(repository.created_at)} days ago by {repository.owner.login}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
