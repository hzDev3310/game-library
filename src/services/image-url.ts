const NewUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
 return (url.slice(0, index) + "crop/660/400/" + url.slice(index));
};
export default NewUrl;
