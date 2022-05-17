/* 
.App-footer p {
  color: var(--grey);
  font-size: var(---10);

  padding-top: var(---10);
  padding-left: var(---10);
  margin: 0;
}

.App-footer span.oda {
  color: var(--amber);
}

.App-link {
  color: #61dafb;
} */

export default function AppFooter() {
  return (
    <div className="App-footer bg-transparent">
      <p className="text-gray-500 text-sm p-4"> 
        made with 👾 by <span className="oda text-amber-500">oda</span> in 2022 | photo by{" "}
        <a href="https://unsplash.com/photos/cBhk90BuOeU">Greg Torosiants</a>
      </p>
    </div>
  );
}
