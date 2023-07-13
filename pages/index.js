import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import React from 'react';

export default function Home() {
  let [library, setLibrary] = useState([
    {
      title: 'Greeting',
      preface: 'Hello World',
      content: 'Hello World!',
      date: '13/7/23',
      ID: 1,
    },
    {
      title: 'Lorem Ipsum',
      preface:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dui sed lectus lobortis placerat sed ac diam. Donec turpis velit, scelerisque a tempor vitae, faucibus et dui. Etiam tincidunt velit id magna sagittis, finibus accumsan ante hendrerit. Suspendisse potenti. Vivamus eget ante sodales, placerat leo eget, bibendum metus. Sed id erat id sem vulputate dignissim vel eu ipsum. Etiam ac purus purus. In quis quam ut leo porta porta sed vitae velit. Sed dapibus bibendum lorem eu tristique. Maecenas magna ligula, gravida a tellus id, gravida suscipit dolor. Donec tincidunt nisl eget leo tempor commodo.',
      content:
        'Curabitur vitae dapibus odio, at ullamcorper est. Mauris vel enim nisl. Ut ultrices quis ex a pretium. Sed nec fringilla nisl, molestie feugiat mi. Pellentesque mi urna, consectetur sed nibh quis, luctus eleifend massa. Cras nec arcu lacus. Ut egestas tristique mi, sit amet pharetra erat malesuada ut. Proin ultrices vestibulum justo, in iaculis nunc convallis sit amet. Vivamus et pretium felis, vel euismod purus. Donec ut arcu ac arcu auctor fringilla. Pellentesque condimentum sit amet elit non efficitur. Mauris hendrerit magna feugiat nulla dapibus interdum at non ex. Integer nec pharetra lacus, ac suscipit lectus.',
      date: '13/7/23',
      ID: 2,
    },
  ]);

  function Article({ title, preface }) {
    return (
      <div className={styles.article}>
        <h2 className={styles.articleTitle}>{title}</h2>
        <div>{preface}</div>
        <button className={styles.articleButton}>{'Read More >'}</button>
      </div>
    );
  }

  function Diary() {
    return (
      <div>
        {library.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            preface={article.preface}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>My Awesome Blog!</title>
      </Head>
      <main>
        <Diary />
      </main>
    </div>
  );
}
