import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav></nav>
        <div id="tabBar"></div>
      </header>
      <main>
        <section class="w-full h-3/4">
          <div id="home">
            <div class="w-full h-3/4">
              <div class="w-full h-full flex flex-col absolute space-y-96 py-4 items-center">
                <input
                  type="search"
                  class="outline p-3 rounded-full shadow-sm"
                  placeholder="San Francisco"
                  name=""
                />
                <button class="w-36 rounded-full text-xl text-primary shadow-sm font-semibold p-4 bg-white">Explorar</button>
              </div>
            </div>
            <div class="w-full h-full">
              <img src="./img/sanFrancisco.jpg" alt="san francisco city" />
            </div>  
          </div>
          <div class="p-20" id="recommendations">
            <div class="w-48 h-64 shadow-md rounded-lg">
              <div class="w-full h-3/5 rounded-t-lg bg-norway bg-cover"></div>
              <div class="w-full h-2/5 bg-secondary rounded-b-lg">
                <p class="text-white font-bold text-xl px-4 py-2">Norway</p>
                <p class="text-white px-4">Paisajes Increíbles</p>
              </div>
            </div>
          </div>
          <div id="featured_rentals"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
