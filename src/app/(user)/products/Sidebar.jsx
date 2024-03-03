import React from 'react'

function Sidebar() {
  return (
    <div className="">
      <div className="">
        <h3 className="font-semibold my-8 ">دسته بندی محصولات</h3>
        <ul className="space-y-4">
          <li>دستگاه تتو</li>
          <li>سوزن تتو</li>
          <li>جوهر تتو</li>
        </ul>
      </div>
      <div className="">
        <h3 className="font-semibold my-8 ">مرتب سازی</h3>
        <ul className="space-y-4">
          <li>جدید ترین</li>
          <li>قدیمی ترین</li>
        </ul>
      </div>
      <div className="">
        <h3 className="font-semibold my-8 ">فیلتر قیمت</h3>
        <ul className="space-y-4">
          <li>ارزان ترین</li>
          <li>گران ترین</li>
        </ul>
      </div>
    </div>

  )
}

export default Sidebar