import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function CategoryList(props) {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const items = [
    {
      caption: "Category 1",
      altText: "subcategory",
      key: 1,
    },
    {
      caption: "Category 2",
      altText: "subcategory",
      key: 2,
    },
    {
      caption: "Category 3",
      altText: "subcategory",
      key: 3,
    },
  ];

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        {items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader targetId={item.key}><strong>{item.caption}</strong></AccordionHeader>
            <AccordionBody accordionId={item.key}>
              {item.altText}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default CategoryList;
