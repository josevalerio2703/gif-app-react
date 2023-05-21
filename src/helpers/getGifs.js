export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=8UP7Ud8CefQuqShh8x8fs35rRbdxa9NJ&q=${category}&limit=10`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((ele) => ({
    id: ele.id,
    title: ele.title,
    url: ele.images.downsized_medium.url,
  }));

  return gifs;
};
