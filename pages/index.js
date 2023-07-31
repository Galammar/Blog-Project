import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import React from 'react';

export default function Home() {
  let [currentPage, setCurrentPage] = useState('articles');
  let [viewingArticleID, setViewingArticleID] = useState(1);
  let [library, setLibrary] = useState([
    {
      title: 'Greetings',
      preface: 'Hello World',
      content: 'Hello World!',
      date: '13/7/23',
      id: 1,
    },
    {
      title: 'Lorem Ipsum',
      preface:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dui sed lectus lobortis placerat sed ac diam. Donec turpis velit, scelerisque a tempor vitae, faucibus et dui. Etiam tincidunt velit id magna sagittis, finibus accumsan ante hendrerit. Suspendisse potenti. Vivamus eget ante sodales, placerat leo eget, bibendum metus. Sed id erat id sem vulputate dignissim vel eu ipsum. Etiam ac purus purus. In quis quam ut leo porta porta sed vitae velit. Sed dapibus bibendum lorem eu tristique. Maecenas magna ligula, gravida a tellus id, gravida suscipit dolor. Donec tincidunt nisl eget leo tempor commodo.',
      content: '',
      date: '13/7/23',
      id: 2,
    },
  ]);

  function Article({ title, preface, id }) {
    return (
      <div className={styles.article}>
        <div>
          <h2 className={styles.articleTitle}>{title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: truncateString(preface, 615) }}
          />
          <button
            className={styles.articleButton}
            onClick={() => {
              setViewingArticleID(id);
              setCurrentPage('viewer');
            }}
          >
            {'Read More >'}
          </button>
        </div>
      </div>
    );
  }

  function Diary() {
    return (
      <div className={styles.diary}>
        {library.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            preface={article.preface}
            id={article.id}
          />
        ))}
      </div>
    );
  }

  function NavBar() {
    return (
      <div className={styles.navBar}>
        <span className={styles.navBarElements}>
          <h2 onClick={() => setCurrentPage('home')}>Home</h2>
        </span>
        <span className={styles.navBarElements}>
          <h2 onClick={() => setCurrentPage('articles')}>Articles</h2>
        </span>
        <span className={styles.navBarElements}>
          <h2 onClick={() => setCurrentPage('new')}>New +</h2>
        </span>
      </div>
    );
  }

  function Home() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }

  function Articles() {
    return (
      <div>
        <Diary />
      </div>
    );
  }

  function New() {
    return (
      <div>
        <h1>New</h1>
      </div>
    );
  }

  function Viewer() {
    let thisArticle = library.find((item) => item.id === viewingArticleID);
    return (
      <div>
        <h1>{thisArticle.title}</h1>
        {thisArticle.content}
      </div>
    );
  }

  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }

    return str.substring(0, maxLength) + '...';
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>My Awesome Blog!</title>
      </Head>
      <main>
        <NavBar />
        {currentPage === 'new' ? (
          <New />
        ) : currentPage === 'articles' ? (
          <Articles />
        ) : currentPage === 'viewer' ? (
          <Viewer />
        ) : (
          <Home />
        )}
      </main>
    </div>
  );
}
