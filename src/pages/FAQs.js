import { Collapse, Card } from 'antd';

const { Panel } = Collapse;

const FAQs = () => {
  return (
    
  <Card><h1>FAQs</h1>
  <br/>
     <Collapse accordion>  
      <Panel header="What is online shopping?" key="1">
        <p>Online shopping is the process of purchasing goods or services over the Internet. It allows consumers to browse and buy products from the comfort of their own homes.
        Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app.
         Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine, which displays the same product's availability and pricing at different e-retailers. 
         As of 2020, customers can shop online using a range of different computers and devices, including desktop computers, laptops, tablet computers and smartphones.
        </p>
      </Panel>
      <Panel header="Is online shopping safe?" key="2">
        <p>Yes, online shopping can be safe if you take the necessary precautions. Make sure to only shop on reputable websites, use a secure payment method, and always check for the padlock symbol in your browser when entering sensitive information such as your credit card number.
       It can be individuals themselves and their internet and online shopping habits making it unsafe. And that is exactly what cybercriminals rely on. They rely on you not knowing how to identify and avoid phishing emails.
        </p>
      </Panel>
      <Panel header="What are the benefits of online shopping?" key="3">
        <p>There are many benefits to online shopping, including convenience, a wider selection of products, and the ability to compare prices easily.
             Online shopping can also save time, as you can shop at any time of the day or night, without having to leave your home.
             The convenience of online shopping
            Customers can purchase items from the comfort of their own homes or workplace. Shopping is made easier and convenient for the customer through the internet. It is also easy to cancel the transactions.
            <br/>
            <br/>
            Why shop Online?
        <ul>Saves time and efforts.</ul>
        <ul>The convenience of shopping at home.</ul>
        <ul>Wide variety/range of products are available.</ul>
        <ul>Good discounts / lower prices.</ul>
        <ul>Get detailed information about the product.</ul>
        <ul>We can compare various models/brands.</ul>
        <ul>No pressure shopping</ul>
        <br/>
        Generally, in physical stores, the sales representatives try to influence the buyers to buy the product. While in online shopping, you're free to do as you will.</p>
      </Panel>
      <Panel header="Can I return items purchased online?" key="4">
        <p>Yes, most online retailers have a returns policy, although it may vary between retailers. Make sure to read the returns policy before making a purchase to ensure that you are aware of the conditions and procedures for returning items.</p>
      </Panel>
      <Panel header="Do I have to pay for shipping on online purchases?" key="5">
        <p>Shipping fees vary between retailers, and some may offer free shipping on orders above a certain amount. Always check the shipping policy before making a purchase to see if there are any shipping fees and if they are included in the total price of your order.</p>
      </Panel>
    </Collapse> </Card>
  );
};

export default FAQs;
