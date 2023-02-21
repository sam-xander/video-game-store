function Main() {
  const [width, setwidth] = useState(0);
  const carousel = useRef();

  // useEffect(() => {
  //   console.log(images);
  //   console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  //   setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (
    <main className="main">
      <div className="main__wrapper">
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/games/:gameName" element={<GamePage />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/new" element={<New />} />
          <Route path="/top" element={<Top />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/:genreName" element={<GenrePage />} />
          <Route path="/home" element={<Test />} />

          {/* KEEP Not Found At Bottom */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
