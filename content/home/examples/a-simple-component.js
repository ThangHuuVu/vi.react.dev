class HelloMessage extends React.Component {
  render() {
<<<<<<< HEAD
    return (
      <div>
        Xin chào {this.props.name}
      </div>
    );
=======
    return <div>Hello {this.props.name}</div>;
>>>>>>> 1a641bb88e647186f260dd2a8e56f0b083f2e46b
  }
}

root.render(<HelloMessage name="Taylor" />);
