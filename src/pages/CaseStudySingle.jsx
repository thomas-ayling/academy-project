import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/case-study-single/Title';
import Body from '../components/case-study-single/Body';
import Headline from '../components/case-study-single/Headline';
import Explanation from '../components/case-study-single/Explanation';
import ContactComponent from '../components/contact-component/ContactComponent';
import { get } from '../service/CaseStudySingleService';
import './styles/CaseStudySingle.css';

const CaseStudySingle = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [pageData, setPageData] = useState({});
  const [requestStatus, setRequestStatus] = useState();

  const { id } = useParams();

  useEffect(() => {
    get(id, setPageData, setRequestStatus, setPageLoaded);
    if (requestStatus === 'error-404') console.error('Case study with id ${id} could not be found');
  }, []);

  if (pageLoaded)
    return (
      <div className='cssp-container'>
        <Title text={pageData.title} />
        <Body data={pageData.body.content} />
        {/* <Headline headline={data.headline} />
      <Explanation explanation={data.explanation} /> */}
        <ContactComponent feedbackType='case-study' />
      </div>
    );
};

export default CaseStudySingle;