/* أدوات مشتركة — لا تحتاج تعديل */
window.LOJI = (() => {
  const newOrderNo = () => {
    const d = new Date(), p = n => String(n).padStart(2, "0");
    return `L${String(d.getFullYear()).slice(2)}${p(d.getMonth() + 1)}${p(d.getDate())}-${Math.floor(1000 + Math.random() * 9000)}`;
  };
  return { newOrderNo };
})();
