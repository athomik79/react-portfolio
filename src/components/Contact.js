import React, { Component } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaMediumM } from 'react-icons/fa';

class Contact extends Component {
  render() {
    return (
      <div id='contact' className='contact-section p-3 p-lg-5'>
        <section className='cta-section theme-bg-light py-5'>
          <div className='contact-content'>
            <h2 className='heading text-left'>Contact</h2>
            <div className='intro'>
              <p>
                Interested in hiring me for your project or just want to say hi?
                You can fill in the contact form below or send me an email to{' '}
                <a href='mailto:#'>athomas@yourwebsite.com</a>
              </p>
              <p className='social-text'>
                Want to get connected? Follow me on the social channels below.
              </p>
              <ul className='text-center single-col-max-width list-inline mb-0'>
                <li className='list-inline-item mb-3'>
                  <a className='linkedin' href='https://www.linkedin.com/'>
                    <FaLinkedin />
                    <i />
                  </a>
                </li>
                <li className='list-inline-item mb-3'>
                  <a className='github' href='https://github.com/athomik79'>
                    <FaGithubAlt />
                    <i />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    className='instagram'
                    href='https://www.instagram.com/?hl=en'
                  >
                    <i />
                    <FaInstagramSquare />
                  </a>
                </li>
                <li className='list-inline-item mb-3'>
                  <a
                    className='stack-overflow'
                    href='https://stackoverflow.com/'
                  >
                    <i />
                    <FaStackOverflow />
                  </a>
                </li>
                <li className='list-inline-item mb-3'>
                  <a className='medium' href='https://medium.com/'>
                    <i />
                    <FaMediumM />
                  </a>
                </li>
              </ul>
              {/*//social-list*/}
            </div>
            {/*//container*/}
          </div>
          <div className='container'>
            <form
              id='contact-form'
              className='contact-form col-lg-8 mx-lg-auto'
              method='post'
              action
            >
              <h3 className='text-center mb-3'>Get In Touch</h3>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label className='sr-only' htmlFor='cname'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='cname'
                    name='name'
                    placeholder='Name'
                    minLength={2}
                    required
                    aria-required='true'
                  />
                </div>
                <div className='form-group col-md-6'>
                  <label className='sr-only' htmlFor='cemail'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='cemail'
                    name='email'
                    placeholder='Email'
                    required
                    aria-required='true'
                  />
                </div>
                <div className='form-group col-12'>
                  <label className='sr-only' htmlFor='cmessage'>
                    Your message
                  </label>
                  <textarea
                    className='form-control'
                    id='cmessage'
                    name='message'
                    placeholder='Enter your message'
                    rows={10}
                    required
                    aria-required='true'
                    defaultValue={''}
                  />
                </div>
                <div className='form-group col-12'>
                  <button
                    type='submit'
                    className='btn btn-block btn-primary py-2'
                  >
                    Send Now
                  </button>
                </div>
              </div>
              {/*//form-row*/}
            </form>
          </div>
          {/*//container*/}
        </section>
      </div>
    );
  }
}

export default Contact;
