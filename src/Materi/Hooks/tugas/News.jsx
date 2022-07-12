import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Circles } from "react-loader-spinner";
import { useEffect } from "react";

const Paragraph = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const News = () => {
  const [search, setSearch] = useState();
  const [news, setNews] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews()
  },[])

  function getNews () {
    setLoading(loading = true);
    const url = `https://newsapi.org/v2/everything?q=${search}&from=2022-07-11&sortBy=popularity&apiKey=8d9a1d3fae944e4fb74b20bb67a117d2`;
    const news = fetch(url);
    news
      .then(function (res) {
        return res.json();
      })
      .then((res) => {
        setNews(res.articles || []);
        setLoading(loading = false);
      })
      .catch((err) => {
        // table.innerHTML = message(err.message)
      });
  };

  return (
    <div>
        {/* Navbar */}
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#6afff3" }}
        >
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">News Web App</span>
          </div>
        </nav>
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light p-3">
                  Find latest news around the world
                </h1>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => setSearch(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    onClick={getNews}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </section>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {loading ? 
                  <Circles color="#00BFFF"/>
                 : (
                  news.map((item, index) => (
                    <div className="col" key={index}>
                      <div className="card shadow-sm">
                        <img
                          src={item.urlToImage}
                          alt="image"
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          height={225}
                        />
                        <div className="card-body">
                          <h3>{item.title}</h3>
                          <small className="text-muted">{item.author}</small>

                          <Paragraph className="card-text">
                            {item.content}
                          </Paragraph>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <a
                                href={item.url}
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Details
                              </a>
                            </div>
                            <small className="text-muted p-6">
                              {item.publishedAt}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
  );
};
