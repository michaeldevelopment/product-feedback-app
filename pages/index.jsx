import { gql, useMutation } from "@apollo/client";
import { client } from "../graphql/client";
import { useState } from "react";
import { useRouter } from "next/router";
import FeedbackMapContainer from "../components/FeedbackMapContainer";
import SortSection from "../components/SortSection";
import NavMobile from "../components/NavMobile";
import NoFeedbackSection from "../components/NoFeedbackSection";

const BOOKS_QUERY = gql`
  query getAllBooks {
    dataAllBooks {
      author
      title
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation addBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      title
      author
    }
  }
`;

const DELETE_ALL_BOOKS_MUTATION = gql`
  mutation deleteAllBooks {
    deleteBooks
  }
`;

// export default function Home({ books, booksLoading }) {
//   const [allBooks, setAllBooks] = useState(books);
//   const [inputValues, setInputValues] = useState(null);
//   const [count, setCount] = useState(0);
//   const [addBook] = useMutation(ADD_BOOK_MUTATION);
//   const [deleteBooks, { data, error: deleteBooksError }] = useMutation(
//     DELETE_ALL_BOOKS_MUTATION
//   );
//   const router = useRouter();

//   const addButtonBook = () => {
//     inputValues.title && inputValues.author ? handleAddBook(inputValues) : null;
//   };

//   const handleAddBook = async (inputValues) => {
//     addBook({
//       variables: inputValues,
//     });
//     setAllBooks([...books, inputValues]);
//   };

//   if (booksLoading) return <h1> Loading ... </h1>;

//   return (
//     <>
//       {allBooks.map((book, index) => {
//         return (
//           <section key={`${book.title}-${index}`}>
//             <h2> {book.title} </h2>
//             <p> {book.author} </p>
//           </section>
//         );
//       })}
//       <input
//         placeholder="Name of the book"
//         name="title"
//         onChange={(e) =>
//           setInputValues({ ...inputValues, [e.target.name]: e.target.value })
//         }
//       ></input>
//       <input
//         placeholder="Author"
//         name="author"
//         onChange={(e) =>
//           setInputValues({ ...inputValues, [e.target.name]: e.target.value })
//         }
//       ></input>
//       <button onClick={addButtonBook}>Add book</button>
//       <h2> {count} </h2>
//       <button onClick={() => setCount(count + 1)}> Add count </button>
//       <button onClick={() => deleteBooks()}> Delete all books </button>
//     </>
//   );
// }

export default function Home({ feedbackItems }) {
  return (
    <>
      <NavMobile />
      <SortSection />
      {feedbackItems.length ? (
        <FeedbackMapContainer feedbackItems={feedbackItems} />
      ) : (
        <NoFeedbackSection />
      )}
    </>
  );
}

export async function getServerSideProps() {
  // const { data: feedbackItems, loading } = await client.query({
  //   query: BOOKS_QUERY,
  // });
  const feedbackItems = await fetch(
    "http://localhost:3000/api/feedbackData"
  ).then((res) => res.json());

  return {
    props: { feedbackItems: feedbackItems.productRequests },
  };
}
