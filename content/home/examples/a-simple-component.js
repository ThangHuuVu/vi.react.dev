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
>>>>>>> d07016aea812d26c60252a952bff7ae3e70bde27
  }
}

root.render(<HelloMessage name="Taylor" />);
