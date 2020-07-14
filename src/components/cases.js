import React from 'react';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';

const caseStudies = [
  { id: 1, subtitle: 'Hair', title: 'Lorem ipsum...', img: 'george' },
  { id: 2, subtitle: 'Beauty', title: 'Lorem ipsum...', img: 'kareya' },
  { id: 3, subtitle: 'Style', title: 'Lorem ipsum...', img: 'oladimeji' },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
            {caseStudies.map((caseItem) => (
              <div className="case" key={caseItem.id}>
                <div className="case-details">
                  <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2>
                </div>
                <div className="case-image">
                  <img src={require(`../assets/${caseItem.img}.jpg`)} alt={caseItem.title} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
